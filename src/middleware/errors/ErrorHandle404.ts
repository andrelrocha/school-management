import { Request, Response, NextFunction } from "express";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const errorHandle404 = (req: Request, res: Response, next: NextFunction) => {
    res.setHeader("Content-Type", "text/html");
    return res.status(404).send("Page not found! <br> <br> <img src='https://images.unsplash.com/photo-1453227588063-bb302b62f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'>");
};

export { errorHandle404 };