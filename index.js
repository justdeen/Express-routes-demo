const express = require('express')
const app = express();
const shelterRoutes = require('./routes/shelter')
const dogRoutes = require('./routes/dog')
const adminRoutes = require('./routes/admin')

app.use('/shelter', shelterRoutes);
app.use('/dog', dogRoutes);
app.use('/admin', adminRoutes)

app.listen(3000, () => {
    console.log('CONNECTION 3000 OPEN')
})