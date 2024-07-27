import React from "react";
import api from "../api";
import Notes from "../components/Notes";

const Home = () => {
    const [notes, setNotes] = React.useState([]);
    const [content, setContent] = React.useState("");
    const [title, setTitle] = React.useState("");

    React.useEffect(() => {
        getNotes();
    }, []);

    const getNotes = () => {
        api.get("/api/notes/")
            .then((res) => {
                if (res.data != undefined) {
                    const data = res.data;
                    setNotes(data);
                }
            })
            .catch((err) => {
                alert(err);
            });
    };

    const deleteNotes = (id) => {
        api.delete(`/api/notes/delete/${id}/`)
            .then((res) => {
                if (res.status === 204) {
                    alert("note deleted");
                    getNotes();
                } else {
                    alert("failed delete note");
                }
            })
            .catch((err) => {
                alert(err);
            });
    };

    const createNotes = (e) => {
        e.preventDefault();
        api.post("/api/notes/", { title, content }).then((res) => {
            if (res.status === 201) {
                alert("note created");
                getNotes();
            } else {
                alert("failed");
            }
        });
    };

    return (
        <div>
            <div>
                <h2>Notes</h2>
                {notes.map((item, i) => {
                    return <Notes note={item} onDelete={deleteNotes} key={item.id} />;
                })}
            </div>
            <div>
                <h2>Create Notes</h2>
                <form onSubmit={createNotes}>
                    <label htmlFor="title">Title:</label>
                    <br />
                    <input
                        type="text"
                        id="title"
                        name="title"
                        required
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />
                    <br />
                    <label htmlFor="content">Content:</label>
                    <br />
                    <textarea
                        id="content"
                        name="content"
                        required
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                    <br />

                    <input type="submit" value={"Submit"} />
                </form>
            </div>
        </div>
    );
};

export default Home;
