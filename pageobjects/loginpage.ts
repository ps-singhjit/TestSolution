import Page from './page';
export{}
/**
 * sub page containing specific selectors and methods for a specific page
 */
//input[@id="name"]
//input[@id="password"]
//span[@id="msg1"]
//span[@id="msg2"]
//button[@id="login"]


class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername() { 
        return $('//input[@id="name"]'); 
    }

    get inputPassword() { 
        return $('//input[@id="password"]'); 
    }

    get btnSubmit() { 
        return $('//button[@id="login"]'); 
    }
    
    get userMessage() { 
        return $('//span[@id="msg1"]');
    }
    
    get pwdMessage() { 
        return $('//span[@id="msg2"]');
    }

 
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */   
    login(username: string, password: string) {
        this.inputUsername.setValue(username);
        this.inputPassword.setValue(password);
        this.btnSubmit.click();
    }

    get getUserMessage () {
        var msg = this.userMessage.getText        
        return msg        
    }
    get getPasswordMessage () {
        var msg = this.pwdMessage.getText        
        return msg        
    }
    // /**
    //  * overwrite specifc options to adapt it to page object
    //  */
    // open () {
    //     super.open('login');
    // }
}

export default new LoginPage();
