import React from 'react';
import { Form } from 'react-bootstrap';

const Checkout = () => {
    return (
        <div className='container'>

<Form class="row g-3">
  <div class="col-md-4 my-2">
    <input type="text" class="form-control" id="validationDefault01" placeholder='Your first name' required />
  </div>
  <div class="col-md-4 my-2">
    <input type="text" class="form-control" id="validationDefault02" placeholder='Your last name' required />
  </div>
  <div class="col-md-4 my-2">
    <div class="input-group">
      <span class="input-group-text" id="inputGroupPrepend2">@</span>
      <input type="text" class="form-control" id="validationDefaultUsername" placeholder='User name'  aria-describedby="inputGroupPrepend2" required />
    </div>
  </div>
  <div class="col-md-6">
    <input type="text" class="form-control" id="validationDefault03" placeholder='City' required />
  </div>
  <div class="col-md-3">
    <label for="validationDefault04" class="form-label">State</label>
    <select class="form-select" id="validationDefault04" required>
      <option selected disabled value="">Choose...</option>
      <option>Dhaka</option>
      <option>Chittagong</option>
      <option>Barishal</option>
      <option>Rajshahi</option>
      <option>Khulna</option>
    </select>
  </div>
  <div class="col-md-3 my-2">
    <input type="text" class="form-control" id="validationDefault05" placeholder='Zip' required />
  </div>
  <div class="col-12">
    <button class="btn btn-primary" type="submit">Confirm Appoint</button>
  </div>
</Form>
        </div>
    );
};

export default Checkout;