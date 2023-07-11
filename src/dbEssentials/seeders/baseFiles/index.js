import express from "express";
import pessoas from "./pessoasRoute";
import niveis from "./niveisRoute";
import turmas from "./turmasRoute";

const configureApp = (app) => {
    app.use(
        express.json(),
        pessoas,
        niveis,
        turmas
    );
};

export default configureApp;
