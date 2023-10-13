import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import Layout from "../components/Layout";
import { Theme, styled, useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import { SelectChangeEvent } from "@mui/material/Select";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import {  useNavigate } from "react-router";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const Tags = [
  "Hot",
  "New",
  "Latest",
  "Trending",
];

function getStyles(tag: string, tags: string[], theme: Theme) {
  return {
    fontWeight:
      tags.indexOf(tag) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}



interface Chapter {
  title: string;
  chapters: File | null;
}

function PublishManga() {
    const [inpval, setInpval] = useState({
        title:"",
        author:"",
        category: "",
        description: "",
      
      });
  const theme = useTheme();
  const [tags, settags] = useState<string[]>([]);
  const [mangaChapters, setMangaChapters] = useState<Chapter[]>([{ title: "", chapters: null }]);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const Navigate = useNavigate();

  const setVal = (e: any) => {
 
    const { name, value } = e.target;

    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const handlethumbnailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleChange = (event: SelectChangeEvent<typeof tags>) => {
    const {
      target: { value },
    } = event;
    settags(typeof value === "string" ? value.split(",") : value);
  };

  const handleChapterTitleChange = (event:  React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => {
    const newChapters = [...mangaChapters];
    newChapters[index].title = event.target.value;
    setMangaChapters(newChapters);
  };

  const handleChapterFileChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    if (event.target.files && event.target.files[0]) {
      const newChapters = [...mangaChapters];
      newChapters[index].chapters = event.target.files[0];
      setMangaChapters(newChapters);
    }
  };

  const addChapter = () => {
    setMangaChapters([...mangaChapters, { title: "", chapters: null }]);
  };

  const removeChapter = (index: number) => {
    const newChapters = [...mangaChapters];
    newChapters.splice(index, 1);
    setMangaChapters(newChapters);
  };

  const handleUploadForm = async (e: any) => {
    e.preventDefault();

    const { title, author, description, category } = inpval;

  if (title === '') {
    toast.error('Title is required!', {
      position: 'top-center',
    });
    return; 
  }

  if (author === '') {
    toast.error('Author is required!', {
      position: 'top-center',
    });
    return; 
  }

  if (description === '') {
    toast.error('Description is required!', {
      position: 'top-center',
    });
    return; 
  }

  if (category === '') {
    toast.error('Category is required!', {
      position: 'top-center',
    });
    return; 
  }

  if (mangaChapters.length === 0) {
    toast.error('At least one chapter is required!', {
      position: 'top-center',
    });
    return;
  }

  
  if (mangaChapters.some((chapter) => chapter.title === '')) {
   
    toast.error('Chapter titles are required for all chapters!', {
      position: 'top-center',
    });
    return; 
  }

  if (mangaChapters.some((chapter) => !chapter.chapters)) {
  
    toast.error('Chapter files are required for all chapters!', {
      position: 'top-center',
    });
    return;
   
  }

  if (tags.length === 0) {
 
    toast.error('Tags are required!', {
      position: 'top-center',
    });
    return; 
  }

  if (!selectedFile) {

    toast.error('Thumbnail is required!', {
      position: 'top-center',
    });
    return; 
  }

    
     else {

 
      const formData = new FormData();
      formData.append('title', title);
      formData.append('author', author);
      formData.append('description', description);
      formData.append('category', category);
      formData.append('tags', tags.join(','));

      mangaChapters.forEach((chapter, index) => {
        formData.append(`chapters[${index}][title]`, chapter.title);
        if (chapter.chapters) {
          formData.append(`chapters`, chapter.chapters);
        }
      });

      if (selectedFile) {
        formData.append('thumbnail', selectedFile);
      }
      const token = localStorage.getItem("usersdatatoken");
      const config = {
        method: 'POST',
        body: formData,
        headers: {
          "x-auth-token": `${token}`,
        },
      };

      const data = await fetch('http://localhost:8000/manga/upload',config);

      const status = data.status;

      if (status === 200) {
        toast.success('Manga published successfully!', {
          position: 'top-center',
        });
        setInpval({ title: '', author: '', category: '', description: '' });
        settags([]);
        setMangaChapters([{ title: '', chapters: null }]);
        setSelectedFile(null);
       
      } else {
        toast.error('Publishing Failed!', {
          position: 'top-center',
        });
      }
    }
  };

  return (
    <Layout>
      <Box component="div" sx={{ background: "white" }}>
        <Typography
          variant="h6"
          className="colorMaroon"
          sx={{
            fontSize: "20px",
            padding: "10px 20px",
            marginBottom: "20px",
            borderBottom: "1px solid #903",
          }}
        >
          PUBLISH NEW MANGA - NEWEST UPDATES
        </Typography>

        <Box component="form" noValidate  onSubmit={handleUploadForm} sx={{ m: 5 }}>
          <TextField
            margin="normal"
            size="medium"
            required
            fullWidth
            id="title"
            label="Title"
            name="title"
            autoComplete="title"
            autoFocus
            value={inpval.title}
            onChange={setVal}
          />

          <TextField
            margin="normal"
            size="medium"
            required
            fullWidth
            id="author"
            label="Author"
            name="author"
            autoComplete="author"
            autoFocus
            value={inpval.author}
            onChange={setVal}
          />

          <TextField
            margin="normal"
            size="medium"
            required
            fullWidth
            id="category"
            label="Category"
            name="category"
            autoComplete="category"
            autoFocus
            value={inpval.category}
            onChange={setVal}
          />

          <TextField
            margin="normal"
            size="medium"
            required
            fullWidth
            id="description"
            label="Description"
            name="description"
            autoComplete="description"
            autoFocus
            value={inpval.description}
            onChange={setVal}
          />

          <FormControl fullWidth sx={{ mt: 2 }}>
            <InputLabel id="demo-multiple-name-label">Tags*</InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              multiple
              value={tags}
              onChange={handleChange}
              input={<OutlinedInput label="tags*" />}
              MenuProps={MenuProps}
            >
              {Tags.map((tag) => (
                <MenuItem
                  key={tag}
                  value={tag}
                  style={getStyles(tag, tags, theme)}
                >
                  {tag}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {mangaChapters.map((chapter, index) => (
            <div key={index}>
              <TextField
                margin="normal"
                size="medium"
                required
                fullWidth
                label={`Chapter ${index + 1}`}
                value={chapter.title}
                onChange={(e) => handleChapterTitleChange(e, index)}
              />
              <input
                type="file"
                accept=".pdf"
                onChange={(e) => handleChapterFileChange(e, index)}
              />
              <Button variant="outlined" onClick={() => removeChapter(index)}>
                Remove Chapter
              </Button>
            </div>
          ))}

          <Button variant="outlined" onClick={addChapter}>
            Add Chapter
          </Button>

         
         
         
          <Button
          sx={{ m: 5}}
            component="label"
            variant="contained"
          
            startIcon={<CloudUploadIcon />}
          >
            {selectedFile ? `Selected File: ${selectedFile.name}` : "Upload thumbnail*"}
            <VisuallyHiddenInput type="file" onChange={handlethumbnailChange} />
          </Button>

          <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                   Upload Manga
                  </Button>
        </Box>
      </Box>
      <ToastContainer />
    </Layout>
  );
}

export default PublishManga;
