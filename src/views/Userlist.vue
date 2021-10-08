<template>
  <div>
    <el-card>
        <!-- search -->
        <el-row :gutter="20">
        <el-col :span="18">
        <el-input placeholder="username"
                    prefix-icon="el-icon-search"
                    v-model="queryInfo.pageInfo"
                    clearable
                    @clear='getMenuList'>
        </el-input>
        </el-col>
        <el-col :span="2"><el-button type="danger" @click= "searchUser">Search</el-button></el-col>
        </el-row>
<!-- table -->
        <el-table :data="tableData" border style="width: 100%">
        <el-table-column type = "index"> 
        </el-table-column>
        <el-table-column prop="name" label="Name" >
        </el-table-column>
        <el-table-column prop="age" label="Age" >
        </el-table-column>
        </el-table>   
    </el-card>
    <!-- page setting -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync= "queryInfo.pageNum"
      :page-sizes="[2, 5, 10]"
      :page-size= "queryInfo.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total= "totalPage">
    </el-pagination>
  </div>
</template>

<script>
 import axios from 'axios'
 const qs = require('qs-stringify')
export default { 
    name:'Option1',
    created(){
        this.getMenuList()
    },
    data() {
        return {
            tableData:[],
            queryInfo:{
                pageInfo:'',
                pageNum:1,
                pageSize:2,
            },
            totalPage:0,  
        }
    },
    methods:{
        getMenuList(){
            axios({
                method:'get',
                url:'http://localhost:8100/users',
                params: this.queryInfo
            }).then((res)=>{            
                this.totalPage = res.data.pageTotal
                this.tableData = res.data.queryData
                })

        },
        handleSizeChange(val1) {
            this.queryInfo.pageSize = val1
            this.getMenuList()  
        },
        handleCurrentChange(val) {
            this.queryInfo.pageNum = val
            this.getMenuList()
        },
        searchUser(){
            this.getMenuList()
        }
    }
}

</script>

<style scoped>
.el-breadcrumb{
    margin-bottom: 10px;
    margin-left: 5px;
}
.el-card{
    font-size: 15px;
    
}
.el-row{
    margin-bottom: 10px;
}
.el-pagination{
    margin-top: 10px;
}

</style>