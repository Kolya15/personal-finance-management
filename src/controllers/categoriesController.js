const HttpStatusCodes = require('http-status-codes');
module.exports = class IncomeCategory {

    constructor(model, defaultCategories) {
        this.modelCategory = model;
        this.defaultCategories = defaultCategories;
    }

    async getAllCategoriesByUser(req, res) {
        try {
            const userId = req.user.id
            const all = await this.defaultCategories.find()
            const category = await this.modelCategory.find({userId})
            return res.json([...all, ...category])
        } catch (e) {
            console.log(e)
            return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send(e);
        }
    }

    async getCategoryById(req, res) {
        try {
            const {id} = req.params
            const category = await this.modelCategory.findById(id)
            return res.json({category})
        } catch (e) {
            return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send(e);
        }
    }

    async addCategory(req, res) {
        try {
            const {name} = req.body
            const userId = req.user.id
            const isDuplicate = await this.modelCategory.findOne({$and: [{userId}, {name}]})
            if (isDuplicate) {
                return res.status(HttpStatusCodes.BAD_REQUEST).send({
                    errors: 'unique'
                });
            }
            const category = new this.modelCategory({name, userId})
            await category.save()
            return res.json({category})
        } catch (e) {
            console.log(e)
            // return res.json({category: this.Category})
            return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send(e);
        }
    }

    async updateCategory(req, res) {
        try{
            const {name} = req.body
            const {id} = req.params
            const userId = req.user.id

            const isDuplicate = await this.modelCategory.findOne({$and: [{userId}, {name}]})
            if (isDuplicate) {
                return res.status(HttpStatusCodes.BAD_REQUEST).send({
                    errors: 'unique'
                });
            }
            const category = await this.modelCategory.findByIdAndUpdate(id, req.body, {new: true})
            return res.json({category})
        } catch (e) {
            return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send(e);
        }
    }

    async deleteCategory(req, res) {
        try{
            const {id} = req.params
            const category = await this.modelCategory.findByIdAndRemove(id)
            return res.json({category})
        } catch (e) {
            console.log(e)
            return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send(e);
        }
    }
}