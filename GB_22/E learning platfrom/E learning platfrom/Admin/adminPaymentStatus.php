<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Payment Status</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
</head>
<body>
  <!-- Header -->
  <header>
    <!-- Your static header content here, if needed -->
  </header>

  <div class="container">
    <h2 class="text-center my-4">Payment Status</h2>
    <form method="post" action="">
      <div class="form-group row">
        <label class="offset-sm-3 col-form-label">Order ID: </label>
        <div>
          <input class="form-control mx-3" id="ORDER_ID" tabindex="1" maxlength="20" size="20" name="ORDER_ID" autocomplete="off" value="ORD1234567890">
        </div>
        <div>
          <input class="btn btn-primary mx-4" value="View" type="submit">
        </div>
      </div>
    </form>
  </div>

  <div class="container">
    <div class="row justify-content-center">
      <div class="col-auto">
        <h2 class="text-center">Payment Receipt</h2>
        <table class="table table-bordered">
          <tbody>
            <tr>
              <td><label>ORDERID</label></td>
              <td>ORD1234567890</td>
            </tr>
            <tr>
              <td><label>TXNID</label></td>
              <td>TXN1234567890</td>
            </tr>
            <tr>
              <td><label>TXNAMOUNT</label></td>
              <td>500.00</td>
            </tr>
            <tr>
              <td><label>STATUS</label></td>
              <td>TXN_SUCCESS</td>
            </tr>
            <tr>
              <td><label>RESPCODE</label></td>
              <td>01</td>
            </tr>
            <tr>
              <td><label>RESPMSG</label></td>
              <td>Txn Successful</td>
            </tr>
            <tr>
              <td><label>TXNDATE</label></td>
              <td>2023-05-23 14:35:21</td>
            </tr>
            <tr>
              <td></td>
              <td><button class="btn btn-primary" onclick="javascript:window.print();">Print Receipt</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <footer>
    <!-- Your static footer content here, if needed -->
  </footer>
</body>
</html>
