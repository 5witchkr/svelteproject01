<script>
    import { login, join, mainpage,pizza} from "../store/writalbeStore.js";
    import { fade, fly } from 'svelte/transition';

    function pizzaclick(){
		mainpage.update(()=>{return true});
        pizza.update(()=>{return false});
	}

	async function categorypizza () {
		const res = await fetch('http://127.0.0.1:8000/content/main', {
            headers:{'Content-Type':'application/json'},
			method: 'POST',
			body: JSON.stringify({
				category: "pizza"
			})
		}).then(res => res.json())
		.then(data => {
			for (const item of data.data.Contents){
			const subject = document.createElement("div");
			const idB = document.createElement("button");
			subject.textContent = item.subject;
			idB.id = item.id;
			idB.textContent = "버튼";
			const userInfo = document.getElementById("userInfo");
			userInfo.appendChild(subject);
			userInfo.appendChild(idB)
			}
		})
    .catch(error => console.log("err"));
	}
	categorypizza()

</script>
<body style="text-align:center; height:970px; display: flex;" class="mainbackground">
<h1>피자</h1>
<div style="background-color: aquamarine;">
<div id="userInfo" style="background-color:azure; margin-top:10px; margin-bottom:10px"></div>
</div>
<button on:click="{() => pizzaclick()}">돌아가기</button>
</body>
<style>
	.mainbackground{
		background:linear-gradient(250deg, rgb(255, 163, 109), rgb(212, 98, 98));
		display:flex;
		flex-direction:column;
		height:100%;
		align-items:center;
		overflow:hidden;
	}
</style>