const express= require("express");
const router = express.Router();
const sequelize= require("../util/database")

const { Sequelize, DataTypes } = require('sequelize');
const Rating=require("../model/database.js")

router.get('/companyreview',(req,res)=>{
    res.render("index");

})
router.post('/add-review',async (req,res,next)=>{
    
    const { companyName, pros, cons, rating } = req.body;

    try {
      
        let company = await Rating.findOne({ where: { companyName } });
    
        if (company) {
            
            company = await company.update({ pros, cons, rating });
            
            //res.status(200).json({ success: true, company });
            res.redirect("/companyreview")
        } else {
            
            company = await Rating.create({ companyName, pros, cons, rating });
            //res.status(201).json({ success: true, company });
            res.redirect("/companyreview")
        }
    } catch (error) {
        console.error('Error creating/updating company:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
});
router.post('/search', async (req, res) => {
    const searchInput = req.body.searchInput;
    console.log("***************",searchInput)
    // Assuming the search input is sent in the request body
    try {
        // Perform database query to retrieve matching records
        const searchResults = await Rating.findAll({
            where: {
                companyName: {
                    [Sequelize.Op.like]: `%${searchInput}%` // Using like operator for partial matching
                }
            }
        });
        res.render('result2', { searchResults:searchResults });
    } catch (error) {
        console.error('Error searching companies:', error);
        res.status(500).send('Internal Server Error');
    }
});


// router.put('/edit-expense/:id',appcontroller.putExpense );
// router.delete('/delete-expense/:id',appcontroller.DeleteExpense);
module.exports=router;