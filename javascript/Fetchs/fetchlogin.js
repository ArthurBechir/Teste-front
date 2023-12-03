async function enviarDados() {
    try {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const dados = {
            email: email,
            password: password
        };

        const response = await fetch('http://localhost:5502/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Cache-Control': 'no-cache',
            },
            body: JSON.stringify(dados),
        });

        const responseData = await response.json();

        if (response.ok) {
            // Processar a resposta da API se necessário
            console.log('Login bem-sucedido!');
        } else {
            // Exibir mensagem de erro no frontend
            if (responseData.errorType === 'UserNotFound') {
                alert(responseData.message);
            } else if (responseData.message === 'SenhaNotFound') {
                alert(responseData.message)
            } else {
                console.error('Erro ao realizar o login:', responseData.message);
            }
        }
    } catch (error) {
        console.error(error);
    }
}