<script>
import { dataset_dev } from 'svelte/internal';
    import { fade, fly } from 'svelte/transition';
    import { login, join } from "../store/writalbeStore.js";
  
    function loginClick(){
		login.update(()=>{return true});
        join.update(()=>{return false});
	}


    let email = ''
	let nickname = ''
    let password = ''
    let result = null
	
	async function doJoin () {
		const res = await fetch('http://127.0.0.1:8000/user/regist', {
            headers:{'Content-Type':'application/json'},
			method: 'POST',
			body: JSON.stringify({
				email,
				nickname,
                password
			})
		})
        const json = await res.json()
		result = JSON.stringify(json)
        alert(JSON.parse(result).resultMsg)
        if (JSON.parse(result).resultCode == 11) {
            loginClick();
    }
	}
    


</script>

<div in:fly="{{ y: 400, duration: 2000 }}" style="text-align:center; font-size:50px; overflow:hidden; min-height:970px; background-color:transparent; height:auto;">

    <dib style="display: flex; justify-content: center; width: 100%">
        <div class="shadow-lg p-3 mb-5 bg-body rounded" style="text-align: center; border: solid 1px gray; border-radius:20px; width: 400px; height: 600px; margin-top: 50px; background: #eeeeee">
            <div style="padding: 30px">
                <h1>-회원가입-</h1></div>
                <div style="padding: 10px; font-size:20px">회원가입 페이지 입니다.</div>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" bind:value={nickname} placeholder="name@example.com" maxlength="24" minlength="1">
                    <label for="inputNickname" style="font-size:20px; color:gray">닉네임</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="email" class="form-control" bind:value={email} placeholder="name@example.com" maxlength="40" minlength="5">
                    <label for="inputEmail" style="font-size:20px; color:gray">이메일 *로그인 아이디로 사용됩니다.</label>
                </div>
                <div class="form-floating">
                    <input type="password" class="form-control" bind:value={password} placeholder="Password" maxlength="24" minlength="4">
                    <label for="inputPassword" style="font-size:20px; color:gray">패스워드</label>
                </div>
                <div style="padding: 20px">
                    <button on:click={doJoin} class="btn btn-outline-secondary" style="font-size:20px">가입 하기</button>
                </div>
                <div style="font-size:20px; color:deepgray">이미 계정이 있으신가요? <button class="btn btn-outline-secondary" on:click={loginClick}>로그인</button></div>
        </div>
    </dib>
</div>