<template>
      <el-card>
        <el-table :data= "stockList" border style="width: 100%">
        <el-table-column type = "index"> 
        </el-table-column>
        <el-table-column prop="item" label="Item" >
        </el-table-column>
        <el-table-column prop="qty" label="Quantity" >
        </el-table-column>
        <el-table-column prop= "size.h" label="Size/height" >
        </el-table-column>
        <el-table-column prop= "size.w" label="Size/width" >
        </el-table-column>
         <el-table-column prop="status" label="Status" >
        </el-table-column>
        </el-table>    
    </el-card>
     
</template>

<script>
import axios from 'axios'
export default {
    name:'option2',
    data() {
        return {
            stockObj:{
                itemName:'',
                itemQuantity:0,
                itemSize:{},
                itemStatus:''
            },
            stockList:[],
            
        }
    },
    
    created(){
       this.getStock()
    },
    methods:{
        getStock(){
            axios({
                method:'get',
                url:'http://localhost:8100/stock',
                params: this.stockObj               
            }).then(res=>{
                this.stockList = res.data
                
            })
        }
    }
}
</script>

<style>

</style>