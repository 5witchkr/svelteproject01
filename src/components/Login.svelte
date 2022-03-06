<script>
    import { fade, fly } from 'svelte/transition';
    import { login, join, mainpage } from "../store/writalbeStore.js";


    function loginClick(){
        join.update(()=>{return true});
		login.update(()=>{return false});
	}

    let email = ''
    let password = ''
    let result = null
	
	async function doLogin () {
		const res = await fetch('http://127.0.0.1:8000/user/login', {
            headers:{'Content-Type':'application/json'},
			method: 'POST',
			body: JSON.stringify({
				email,
                password
			})
		})
        const json = await res.json()
		result = JSON.stringify(json)
        alert(JSON.parse(result).resultMsg)
        if (JSON.parse(result).resultCode == 12) {
            login.update(()=>{return false});
            mainpage.update(()=>{return true});
    }
	}


</script>
<div in:fly="{{ y: 400, duration: 2000 }}" style="text-align:center; font-size:50px; overflow:hidden; min-height:970px; background-color:transparent; height:auto;">

    <dib style="display: flex; justify-content: center; width: 100%">
        <div class="shadow-lg p-3 mb-5 bg-body rounded" style="text-align: center; border: solid 1px gray; border-radius:20px; width: 400px; height: 530px; margin-top: 50px; background: #eeeeee">
            <div style="padding: 30px">
                <h1>-로그인-</h1></div>
            <div style="padding: 20px; font-size:20px;">환영합니다!</div>
            <div class="form-floating mb-3">
                <input type="email" class="form-control" bind:value={email} placeholder="name@example.com">
                <label for="inputEmail" style="font-size:20px; color:gray">이메일</label>
            </div>
            <div class="form-floating">
                <input type="password" class="form-control" bind:value={password} placeholder="Password">
                <label for="inputPassword" style="font-size:20px; color:gray">패스워드</label>
            </div>
            <div style="padding: 20px">
              <button on:click={doLogin} class="btn btn-outline-secondary" style="font-size:20px;">로그인</button>
            </div>
            <div style="font-size:20px; color:deepgray">계정이 아직 없으신가요? <button class="btn btn-outline-secondary" on:click={loginClick}>회원가입</button></div>
        </div>
    </dib>
</div>