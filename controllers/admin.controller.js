class AdminController {

    blogOne = async (req, res, next) => {
        res("blog 1")
    }

    blogTwo = async (req, res, next) => {
        res("blog 2")
    }

    blogSetting = async (req, res, next) => {
        res("blogsetting")
    }
}

const adminctrl = new AdminController;
module.exports = adminctrl;