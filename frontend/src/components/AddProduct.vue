<template>
    <h1 class="header">Add Product</h1>
    <div class="container">
        <form class="custom-form">
            <div class="form-group">
                <label for="exampleInputEmail1">Name</label>
                <input type="text" 
                class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name">
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Quantity</label>
                <input type="number" class="form-control" id="exampleInputPassword1" placeholder="Quantity">
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Price</label>
                <input type="number" class="form-control" id="exampleInputPassword1" placeholder="Price">
            </div>
            <button type="submit" class="btn btn-primary" style="margin-top: 10px;">Add to the list</button>
        </form>
    </div>
</template>

<script></script>

<style>
.custom-form {
    width: 50%;
    height: 70%;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: rgb(210, 225, 225);
}
.container {
    display: flex;
    justify-content: center;
    /*align-items: center;*/
    height: 100vh;
}
.header {
    display: flex;
    justify-content: center;
}
.form-group {
    margin-top: 10px;
}

</style>