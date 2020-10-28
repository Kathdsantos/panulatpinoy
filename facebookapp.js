window.fbAsyncInit = function() {
        FB.init({
          appId      : '1729478873878750',
          cookie     : true,
          xfbml      : true,
          version    : 'v8.0'
        });

        FB.getLoginStatus(function(response) {
            statusChangeCallback(response);
        });
      };

      (function(d, s, id){
         var js, fjs = d.getElementsByTagName(s)[0];
         if (d.getElementById(id)) {return;}
         js = d.createElement(s); js.id = id;
         js.src = "//connect.facebook.net/en_US/sdk.js";
         fjs.parentNode.insertBefore(js, fjs);
       }(document, 'script', 'facebook-jssdk'));

       function statusChangeCallback(response){
         if(response.status === 'connected'){
           console.log('Logged in and authenticated');
           setElements(true);
           testAPI();
         } else {
           console.log('Not authenticated');
           setElements(false);
         }
       }

      function checkLoginState() {
        FB.getLoginStatus(function(response) {
          statusChangeCallback(response);
        });
      }

      function testAPI(){
        FB.api('/me?fields=name,email', function(response){
          if(response && !response.error){
            buildProfile(response);
          }
        })
      }

      function buildProfile(user){
        let profile = `
          <h4 class="username">${user.name}</h4>
        `;
        document.getElementById('profile').innerHTML = profile;
        let email = `${user.email}`;
        document.getElementById('useremail').value = email;
        let username = `${user.name}`;
        document.getElementById('username').value = username;
      }

      function setElements(isLoggedIn){
        if(isLoggedIn){
          document.getElementById('logout').style.display = 'block';
          document.getElementById('profile').style.display = 'block';
          document.getElementById('fb-btn').style.display = 'none';
          document.getElementById('heading').style.display = 'none';
          document.getElementById('details').style.display = 'block';
          document.getElementById('submit').style.display = 'block';
          document.getElementById('delete').style.display = 'block';
        } else {
          document.getElementById('logout').style.display = 'none';
          document.getElementById('profile').style.display = 'none';
          document.getElementById('fb-btn').style.display = 'block';
          document.getElementById('heading').style.display = 'block';
          document.getElementById('details').style.display = 'none';
          document.getElementById('submit').style.display = 'none';
          document.getElementById('delete').style.display = 'none';
        }
      }

      function logout(){
        FB.logout(function(response){
          setElements(false);
        });
      }