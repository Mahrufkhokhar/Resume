const servicesController = (req,res)=>{
    res.render('services', {
        title: 'services'
    })
}

module.exports = {servicesController}