import axios from "axios";
import { toast } from "react-toastify";

const base_URL = "http://localhost:4500";

const getAllTodo = (setTodo) => {
  axios
    .get(base_URL)
    .then((res) => {
      setTodo(res.data.data);
      if (res.data.statusCode === 200 || res.data.statusCode === 201) {
        toast.success(res.data.message);
      }
      if (res.data.statusCode === 400) {
        toast.error(res.data.message);
      }
    })
    .catch((err) => {
      toast.error(err.message ?? err);
    });
};

const addTodo = (text, setText, setTodo) => {
  if (!text) {
    toast.error("Please provide Todo activity");
    return;
  }

  axios
    .post(`${base_URL}/save`, { text })
    .then((res) => {
      setText("");

      if (res.data.statusCode === 200 || res.data.statusCode === 201) {
        toast.success(res.data.message);
      }
      if (res.data.statusCode === 400) {
        toast.error(res.data.message);
      }
      getAllTodo(setTodo);
    })
    .catch((err) => {
      toast.error(err.message ?? err);
    });
};

const updateTodo = (todoId, text, setText, setTodo, setIsUpdate) => {
  if (!text) {
    toast.error("Please provide Todo activity");
    return;
  }

  axios
    .post(`${base_URL}/update`, { _id: todoId, text })
    .then((res) => {
      setText("");
      setIsUpdate(false);

      if (res.data.statusCode === 200 || res.data.statusCode === 201) {
        toast.success(res.data.message);
      }
      if (res.data.statusCode === 400) {
        toast.error(res.data.message);
      }
      getAllTodo(setTodo);
    })
    .catch((err) => {
      toast.error(err.message ?? err);
    });
};

const deleteTodo = (_id, setTodo) => {
  axios
    .delete(`${base_URL}/delete/${_id}`)
    .then((res) => {
      if (res.data.statusCode === 200 || res.data.statusCode === 201) {
        toast.success(res.data.message);
      }
      if (res.data.statusCode === 400) {
        toast.error(res.data.message);
      }
      getAllTodo(setTodo);
    })
    .catch((err) => {
      toast.error(err.message ?? err);
    });
};
export { getAllTodo, addTodo, updateTodo, deleteTodo };
