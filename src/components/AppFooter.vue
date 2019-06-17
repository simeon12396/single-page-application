<template>
  <div>
    <v-footer dark color="rgba(0,0,0,0.7)" height="auto">
      <div class="contact-us">
        <div class="contact-us__header">
          <div class="display-1">Contact us</div>
          <div class="subheading">Contact us now for a free consultation.</div>
        </div>

        <div class="contact-us__main">
         <v-layout>
           <v-flex class="contacts-flex">
             <v-layout class="icon-df" column>
               
               <v-flex>
                 <i class="fas fa-street-view"></i>
                 <span>pl. "Russki Pametnik", Sofia</span>
               </v-flex>

               <v-flex>
                <i class="fas fa-envelope-open"></i>
                 <span>tech-store@gmail.com</span>
               </v-flex>

               <v-flex class="mb-5">
                 <i class="fas fa-phone"></i>
                 <span>+359 898 53 21 42</span>
               </v-flex>

               <v-flex class="mt-3">
                 <div class="subheading mb-3">Subscribe to our newsletter</div>
                 <v-text-field name="email" label="Enter your Email address" type="text" v-model="subscribeInputData" 
                 ></v-text-field>
                 {{$v.subscribeInputData}}
                 <v-btn type="submit" color="success" @click="sendSubscribeMsg">Send</v-btn>
               </v-flex>
             </v-layout>
           </v-flex>

           <v-flex class="contact-form-flex">
             <v-form>
              <div class="wrapper">
                <v-text-field name="name" label="Name" type="text" v-model="formData.name"></v-text-field>
                {{$v.formData.name}}
                <v-text-field name="email" label="Email" type="text" v-model="formData.email"></v-text-field>
                {{$v.formData.email}}
              </div>

              <v-text-field height="50px" class="input-message" name="message" label="Message" type="text" v-model="formData.message"></v-text-field>
                {{$v.formData.message}}
              <v-btn type="submit" color="success" @click.prevent="sendContactUsMsg">Send</v-btn>  
            </v-form>
           </v-flex>
         </v-layout>
        </div>
      </div>

      <div class="bottom-footer">
        <div class="wrapper">
          <ShareFacebook url="http://recruit.istyle.co.jp/career/"/>
          <ShareTwitter url="http://recruit.istyle.co.jp/career/"/>
          <ShareGooglePlus url="http://recruit.istyle.co.jp/career/"/>
        </div>

        <div class="copyright">
          <span>Copyright 2019</span>
          <span>All Rights Reserved</span>
        </div>
      </div>
    </v-footer>
  </div>
</template>

<script>
import { ShareFacebook, ShareTwitter, ShareGooglePlus } from 'vue-share-social';
import { mapActions } from "vuex";
import { setTimeout } from 'timers';
import { required, email, minLength } from "vuelidate/lib/validators";

export default {
  components: {
    ShareFacebook,
    ShareTwitter,
    ShareGooglePlus
  },
  data() {
    return {
      subscribeInputData: null,
      formData: {
        name: null,
        email: null,
        message: null
      }
    }
  },
  validations: {
    subscribeInputData: {
      required,
      email
    },
    formData: {
      name: {
        required
      },
      email: {
        required,
        email
      },
      message: {
        required,
        minLength: minLength(5)
      }
    }
  },
  methods: {
    isSubscribingFormValid(){
      return !this.$v.subscribeInputData.$invalid;
    },
    isContactUsFormValid(){
      return !this.$v.formData.$invalid;
    },
    sendSubscribeMsg() {
      if(this.isSubscribingFormValid()) {
        this.$store.dispatch('sendSubscribeMsg', this.subscribeInputData);
      } else {
        alert('Something is wrong! Please, fill correctly your email address!');
      }

      setTimeout(() => {
        this.subscribeInputData = null;
      }, 2000); 
    },
    sendContactUsMsg() {
      if(this.isContactUsFormValid()) {
         this.$store.dispatch('sendContactUsMsg', this.formData);
      } else {
         alert('Something is wrong! Please, fill the form correctly!');
      }

      setTimeout(() => {
        this.formData.name = null;
        this.formData.email = null;
        this.formData.message = null;
      }, 2000);
    }
  }
}
</script>

<style lang="scss" scoped>
 @import "../styles/components/appFooter.scss";
</style>

