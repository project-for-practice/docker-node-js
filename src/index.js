const app = require('express')();

app.get('/', (req, res) => {
  const html = `
  
   <style>
    table {
      border-collapse: collapse;
      width: 60%;
      margin: 0 auto;
    }

    td {
      border: 1px solid black;
      padding: 10px;
    }

    h3 {
      text-align: center;
    }
  </style>
  <h3 style='color:Green'>Congratulations, your app is running</h3>
  <table>
    <tr>
      <td>🐳 Message:</td>
      <td>Your app 📦</td>
    </tr>
  </table>`;

  res.send(html);
});

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`app listening on http://localhost:${port}`));
