<script>
    import { login, join, mainpage,pizza} from "../store/writalbeStore.js";

    function pizzaclick(){
		mainpage.update(()=>{return true});
        pizza.update(()=>{return false});
	}
</script>
<h1>ㅎㅇ</h1>
<button on:click="{() => pizzaclick()}">돌아가기</button>