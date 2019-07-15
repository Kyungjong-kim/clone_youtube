import express from "express";
import routes from "../routes";
import {
    videoDetail,
    editVideo,
    deleteVideo,
    getUpload,
    postUpload
} from "../controllers/videoControllers";
import { uploadVideo, onlyPrivate } from "../middlewares";

const videoRouter = express.Router();

videoRouter.get(routes.upload, onlyPrivate, getUpload);
videoRouter.post(routes.upload, onlyPrivate, uploadVideo, postUpload);

videoRouter.get(routes.videoDetail(), videoDetail);

videoRouter.get(routes.editVideo(), onlyPrivate, editVideo);
videoRouter.post(routes.editVideo(), onlyPrivate, editVideo);

videoRouter.get(routes.deleteVideo(), onlyPrivate, deleteVideo);

export default videoRouter