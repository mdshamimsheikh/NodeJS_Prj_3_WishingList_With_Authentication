import errHandler from "../midlewares/err.js";
import { Task } from "../models/task.js";
export const newTask = async (req, res, next) => {
    const { title, description } = req.body;
    await Task.create({ title, description, user: req.user });

    res.status(200).json({
        success: true,
        message: "Task Successfully added.",
    });
    next();
}

export const myTask = async (req, res) => {
    try {
        const userid = req.user._id;
        const task = await Task.find({ user: userid });
        if (!task) return next(new errHandler("Task not found", 404));
        res.status(200).json({
            success: true,
            task,
        });
    } catch (error) {
        next(error);
    }
};
export const taskUpdated = async (req, res, next) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) return next(new errHandler("Task not found", 404));
        task.completed = !task.completed;
        await task.save();
        res.status(200).json({
            success: true,
            message: "Task Successfully Updated",
        });
    } catch (error) {
        next(error);
    }
};
export const taskDeleted = async (req, res, next) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) return next(new errHandler("Task not found", 404));
        await task.deleteOne();
        res.status(200).json({
            success: true,
            message: "Task Successfully Deleted",
        });
    } catch (error) {
        next(error);
    }
};