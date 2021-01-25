const { Router } = require('express');
const router = Router();

router.post("/", [], async (req, res) => {
  console.log("Урааа!");
  res.status(200).json({ answer: "Ответ" });
})

module.exports = router;