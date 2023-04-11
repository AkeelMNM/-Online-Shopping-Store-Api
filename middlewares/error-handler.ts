import { Request, Response, NextFunction } from 'express'

interface ErrorResponse extends Error {
    status: number;
    message: string;
}

const ErrorHandler = (err: ErrorResponse, req: Request, res: Response, next: NextFunction) => {
    console.log("Middleware Error Handling:::");
    const errStatus = err.status || 500;
    const errMsg = err.message || 'Something went wrong';
    
    res.status(errStatus).json({
        success: false,
        status: errStatus,
        message: errMsg,
        stack: process.env.NODE_ENV === 'development' ? err.stack : {}
    })
}

export default ErrorHandler;

// app.use(function (err: any, req: Request, res: Response, next: NextFunction) {
//     // set locals, only providing error in development
//     res.locals.message = err.message;
//     res.locals.error = req.app.get("env") === "development" ? err : {};
  
//     // render the error page
//     res.status(err.status || 500);
//     res.render("error");
//     console.error(err);
//   });