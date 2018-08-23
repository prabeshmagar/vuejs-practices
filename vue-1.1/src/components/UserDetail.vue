<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ switchName() }}</p>
        <p>User Age: {{ userAge  }}</p>
        <button class="btn btn-primary" @click="resetName">Reset Name</button>
        <button class="btn btn-success" @click="resetFn()">Reset Name</button>

    </div>
</template>

<script>
import { eventBus } from "../main";

    export default{
        props: {
            userName: {
                type: String,
                // required: true,
                default: 'Max'
            },
            resetFn: Function,
            userAge: Number
        },
        methods: {
            switchName() {
                return this.userName.split("").reverse().join("");
            },
            resetName() {
                this.userName = 'Prabesh'; 
                this.$emit('nameWasReset', this.userName);
            }
        },
        created() {
            eventBus.$on('ageWasEdited', (age)=>{
                this.userAge = age;
            });
        }
    }
</script>

<style scoped>
    div .component{
        background-color: lightcoral;
    }
</style>
