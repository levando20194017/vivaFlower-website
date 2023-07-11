import express from "express";
import homeController from "../controller/homeController";
import userController from "../controller/userController";
import { auth } from "../middleware/auth";

// const auth = (req, res, next) => {
//     // Kiểm tra xem user có đăng nhập hay không
//     console.log(req.session.user);
//     if (!req.session.user) {
//         return res.status(401).json({
//             message: "Bạn cần đăng nhập để thực hiện chức năng này",
//         });
//     }

//     // Kiểm tra xem user có phải là admin hay không
//     if (req.session.user.role == false) {
//         return res.status(403).json({
//             message: "Bạn không có quyền thực hiện chức năng này",
//         });
//     }

//     // Nếu user đăng nhập và là admin, cho phép tiếp tục thực hiện
//     next();
// };
let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage)
    router.get('/about', homeController.getAboutpage)
    router.get('/crud', homeController.getCRUD)
    router.get('/get-crud', homeController.displayGetCRUD);
    router.post('/post-crud', homeController.postCRUD)
    router.get('/edit-crud', homeController.displayEditCRUD);
    router.post('/put-crud', homeController.putCRUD);
    router.get('/delete-crud', homeController.deleteCRUD);

    router.get('/api/get-all-users', userController.handleGetAllUsers)
    router.post('/api/login', userController.handleLogin)
    router.post('/api/create-new-user', userController.handleCreateNewUser)
    router.put('/api/edit-user', userController.handleEditUser)
    router.put('/api/edit-profile', userController.handleEditInfor)
    router.put('/api/user-changepassword', userController.userChangePassword)
    router.delete('/api/delete-user', auth, userController.handleDeleteUser)

    return app.use("/", router)
}

module.exports = initWebRoutes;