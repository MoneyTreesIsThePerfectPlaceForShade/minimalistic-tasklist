import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./Task.module.scss";
import cn from "classnames";

import { deleteTask, toggleDone, toggleTheme } from "../model/tasksSlice";
import { EditTask } from "@/features";

import MDEditor from "@uiw/react-md-editor";
// icons
import { BsTrash } from "react-icons/bs";
import { MdDone } from "react-icons/md";

interface ITask {
  task: {
    id: string;
    title: string;
    body: string;
    done: boolean;
    colorTheme: string;
  };
}

export const Task: FC<ITask> = ({
  task: { id, title, body, done, colorTheme },
}) => {
  const dispatch = useDispatch();

  const [isDone, setIsDone] = useState(done);

  const doneTask = () => {
    setIsDone(!isDone);
    dispatch(toggleDone(id));
  };

  const [theme, setTheme] = useState(colorTheme);

  const themeChecker = () => {
    return theme === "light"
      ? styles.lightTheme
      : theme === "dark"
      ? styles.darkTheme
      : theme === "yellow"
      ? styles.yellowTheme
      : theme === "blue"
      ? styles.blueTheme
      : theme === "green"
      ? styles.greenTheme
      : theme === "brown"
      ? styles.brownTheme
      : theme === "indigo"
      ? styles.indigoTheme
      : theme === "orange"
      ? styles.orangeTheme
      : theme === "wheat"
      ? styles.wheatTheme
      : theme === "purple"
      ? styles.purpleTheme
      : "";
  };

  return (
    <div className={cn(styles.task, themeChecker())}>
      <div className={styles.doneBtnAndSelectTheme}>
        <button onClick={doneTask}>
          <MdDone className={styles.icon} />
        </button>
        <select
          name="colorTheme"
          id="colorTheme"
          onChange={(e) => {
            setTheme(e.target.value);
            dispatch(toggleTheme({ id: id, colorTheme: e.target.value }));
          }}
          className={cn(styles.selectColorTheme, themeChecker())}
        >
          <option value="default" selected hidden disabled></option>
          <option value="light" className={styles.lightTheme}></option>
          <option value="dark" className={styles.darkTheme}></option>
          <option value="yellow" className={styles.yellowTheme}></option>
          <option value="blue" className={styles.blueTheme}></option>
          <option value="green" className={styles.greenTheme}></option>
          <option value="brown" className={styles.brownTheme}></option>
          <option value="indigo" className={styles.indigoTheme}></option>
          <option value="orange" className={styles.orangeTheme}></option>
          <option value="wheat" className={styles.wheatTheme}></option>
          <option value="purple" className={styles.purpleTheme}></option>
        </select>
      </div>
      <div
        className={cn(styles.titleNBody, done ? styles.done : "")}
        data-color-mode="light"
      >
        <p className={styles.title}>{title}</p>
        <MDEditor.Markdown
          className={styles.body}
          source={body}
          skipHtml={true}
          transformLinkUri={null}
        />
      </div>
      <div className={styles.trashEditBlock}>
        <button
          onClick={() => {
            dispatch(deleteTask(id));
          }}
        >
          <BsTrash className={styles.trash} />
        </button>
        <EditTask id={id} />
      </div>
    </div>
  );
};
