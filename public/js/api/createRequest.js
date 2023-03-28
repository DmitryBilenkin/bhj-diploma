/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
    const xhr = new XMLHttpRequest();

    xhr.onloadend = ()=>{
        try{
            if(xhr.status === 200){
                if(options.method == 'GET'){
                    xhr.open(options.method, `${options.url}?mail=${options.data.mail}&password=${options.data.password}`);
                    xhr.responseType = 'json';
                    xhr.send();


                }else{            
                    const formData = new FormData();
                    formData.append('mail', options.data.mail);
                    formData.append('password', options.data.password);
        
                    xhr.open(options.method, options.url);
                    xhr.responseType = 'json';                
                    xhr.send(formData);    
                };

                options.callback(xhr.status, xhr.response)
                    };               
        } catch(e){
            callback(e);
        };
    };
};
