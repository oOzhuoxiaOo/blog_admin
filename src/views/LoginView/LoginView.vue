<template>
    <div class="login-view">
        <div class="login-box">
            <div class="left">
                <el-image
                    src="https://th.bing.com/th/id/R.37fb894ad4337d991ee2d4f5a1fc1165?rik=JaTjKOq3g%2b9LHw&riu=http%3a%2f%2fpic.qianye88.com%2fpic%2fffd8cdfa2b1ef02ea21564d958dce927.jpg&ehk=PYt6VdGEnInXES5wJnb7OGCOPDCpX3BS%2fQqmFn%2bK3wY%3d&risl=&pid=ImgRaw&r=0"
                    fit="cover" style="width: 100%; height: 100%;" />
            </div>
            <div class="right">
                <div class="icon">
                    <el-image src="src\assets\image\favicon.webp"></el-image>
                </div>
                <el-form :model="formData" :rules="formRules" ref="formInstance">
                    <el-form-item prop="username">
                        <el-input v-model="formData.username" size="large" placeholder="请输入账号">
                            <template #prefix>
                                <el-icon>
                                    <UserFilled  />
                                </el-icon>
                            </template>
                        </el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input v-model="formData.password" size="large" placeholder="请输入账号" >
                            <template #prefix>
                                <el-icon><Lock /></el-icon>
                            </template>
                        </el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="login(formInstance)" class="submit" style="width: 100%;">登录</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>


<script lang="ts" setup>

// 导入所需的库和类型
import { ref } from 'vue';
import type { FormRules, FormInstance, ElMessage } from "element-plus"
import { UserFilled,Lock } from "@element-plus/icons-vue"
import { useRouter } from "vue-router";
const router = useRouter()

// 定义表单数据的接口哦
interface FormData {
    username: string,
    password: string
}


// 创建并初始化表单数据
// 使用 ref 创建响应式数据， 初始值为一个空的 FormData 对象
const formData = ref<FormData>({
    username: '',
    password: ''
})

// 创建表单实例
const formInstance = ref<FormInstance>();

// 创建表单验证规则
const formRules = ref<FormRules<FormData>>({
    username: [
        { required: true, message: '请输入账号', trigger: 'blur' },
        { validator: (rule,value,callback)=>{

            // 去除所有空格
            let noSpace = value.replace(/\s/g, '');
            // 如果去除空格后的长度小于原字符串长度，说明有空格
            if(noSpace.length < value.length) {
                callback(new Error('账号不能包含空格'))
            } else {
                callback()
            }
        }}
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 6, max: 18, message: '长度在 6 到 18 个字符', trigger: 'blur' }
    ]
})

// methods
async function login(formEl: FormInstance){
    // 调用表单实例的 validate 方法进行表单验证
    // validate 方法接收一个回调函数，回调函数的第一个参数是验证结果真值，第二个参数是验证失败的字段数组
    await formEl.validate((valid, fields) => {
        console.log('valid', valid)
        console.log('fields', fields)
    if (valid) {
      console.log('submit!')
    //🚩登录
    ElMessage.success("登录成功")
    router.push("/home")
    } else {
      console.log('error submit!', fields)
    }
    
  })

}

</script>


<style lang="scss" scoped>
.login-view {
    width: 100vw;
    height: 100vh;
    background-color: var(--b-c-3);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .login-box {
        border: solid;
        display: flex;
        width: 80%;
        height: 550px;


        .left {
            flex: 1;
            overflow: hidden;
        }

        .right {
            // flex: 1;
            width: 300px;
            padding: 30px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            // align-items: center;
            background-color: var(--b-c-10);

            .icon {
                width: 100px;
                height: 100px;
                margin: 0 auto 50px;
            }
        }

    }
}

.submit {
    margin-top: 20px;
}


</style>