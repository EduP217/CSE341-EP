const welcome = (req, res) => {
    console.debug(req.query);
    const { name = "Cristina Ipanaque" } = req.query;
    res.send(`Welcome, ${name}!`);
}

module.exports = {
    welcome
}