<style scoped>

    /* The sidebar menu */
    .sidenav {
    height: 100%; /* Full-height: remove this if you want "auto" height */
    width: 250px;
    position: fixed; /* Fixed Sidebar (stay in place on scroll) */
    z-index: 1; /* Stay on top */
    top: 63px; /* Stay at the top */
    left: 0;
    background-color: #F9F9F9; /* Black */
    overflow-x: hidden; /* Disable horizontal scroll */
    padding-top: 5px;
    box-shadow: 5px 0 5px -2px #818181;
    }

    /* The navigation menu links */
    .sidenav a, .header {
    padding: 10px 8px 10px 16px;
    text-decoration: none;
    font-size: 18px;
    color: #818181;
    display: block;
    }

    /* When you mouse over the navigation links, change their color */
    .sidenav a:hover {
    color: #19A6A6;
    }

    /* On smaller screens, where height is less than 450px, change the style of the sidebar (less padding and a smaller font size) */
    @media screen and (max-height: 450px) {
    .sidenav {padding-top: 15px;}
    .sidenav a {font-size: 18px;}
    }
</style>

<template>
    <nav id="nav">
        <v-app-bar fixed
        color="teal lighten-1"
        dark
        height="63px"
        >
        <!--
            <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
        -->
            <div style="width:100%; white-space:nowrap;">
                <a href="/" style="display: inline-block;">
                    <img height="50px" width="50px" style="margin-top:5px" src="../assets/1200px-Ipsos_logo.svg.png" />
                </a>
                
                <v-toolbar-title style="padding:10px 10px 10px 10px; display: inline-block;">Quality Workshop</v-toolbar-title>
            </div>
            <span style="float: right;" align="right">
                <v-menu 
                    v-model="value"
                    offset-x 
                    left
                    close-on-content-click="true"
                    close-on-click="true"
                >
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                        icon
                        v-bind="attrs"
                        v-on="on"
                        v-on:click="resetNotifications()"
                        >
                            <v-badge
                                :content="notificationsCount"
                                :value="notificationsVisible"
                                :color="notificationsColor"
                                overlap
                                left
                            >
                                <v-icon >mdi-bell</v-icon>
                            </v-badge>
                        </v-btn>
                    </template>
                    <v-list width="450px">
                        <span v-for="(message, i) in notifications"
                                    :key="i">
                            <v-list-item>
                                <v-list-item-title>
                                    <v-icon>{{ message.icon }}</v-icon>
                                    <v-btn text>
                                        <router-link :to="message.path" tag="span">{{ message.text }}</router-link>
                                    </v-btn>
                                </v-list-item-title>
                            </v-list-item>
                            <v-divider v-if="i != notifications.length - 1"></v-divider>
                        </span>
                    </v-list>
                </v-menu>

                
            </span>
            
        </v-app-bar>

        <div class="sidenav">
            <div class="header" style="overflow:auto;">
                <div style="float:left; padding-top:10px;">Welcome Visitor!</div>
                <div style="float:right;">
                    <v-menu 
                        v-model="value"
                        offset-x
                        
                        close-on-content-click="true"
                        close-on-click="true"
                    >
                        <template v-slot:activator="{ on, attrs }">
                            
                                <v-btn
                                icon
                                large
                                v-bind="attrs"
                                v-on="on"
                                >
                                    <v-icon large>
                                        mdi-account-circle
                                    </v-icon>
                                </v-btn>
                            
                        </template>
                        <v-list>
                            <v-list-item
                                v-for="(button, i) in ProfileButtons"
                                    :key="i"
                                @click="remove"    
                            >
                                <v-list-item-title><v-btn text>
                                        <router-link :to="button.path" tag="span">{{ button.text }}</router-link>
                                </v-btn></v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </div>
            </div>
            <v-divider style="margin:0px 10px 15px 10px;"></v-divider>
            <router-link v-for="(button, i) in buttons" 
                            :key="i"
                            :to="button.path">
                            <v-icon>{{ button.image }}</v-icon>&nbsp;{{ button.text }}
            </router-link>
        </div>



        <!--
        <div style="position: absolute; z-index: 999;">
            <v-navigation-drawer
            v-model="drawer"
            temporary
            clipped
            >
                <v-list nav dense>
                    <v-list-item-group
                    v-model="group"
                    active-class="indigo--text text--accent-4"
                    >    
                        <v-list-item v-for="(button,i) in buttons" 
                                     :key="i"
                                     :to="button.path">
                            <v-list-item-icon>
                            <v-icon>{{ button.image }}</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>{{ button.text }}</v-list-item-title>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-navigation-drawer>
        </div>
        -->
    </nav>
</template>

<script>
  export default {
    el: '#nav',
    data: () => ({
      drawer: false,
      buttons: [
        { 
            text: 'Home',
            path: '/',
            image: 'mdi-home'
        },
        { 
            text: 'About',
            path: '/about',
            image: 'mdi-text-box-multiple-outline'
        },
        { 
            text: 'Dashboard',
            path: '/dashboard',
            image: 'mdi-television-guide'
        },
        { 
            text: 'Mailouts',
            path: '/mailouts',
            image: 'mdi-email-outline'
        },
        { 
            text: 'Reports',
            path: '/reports',
            image: 'mdi-chart-line'
        },
        { 
            text: 'Sample',
            path: '/sample',
            image: 'mdi-database'
        },
        ],
    ProfileButtons: [
        { 
            text: 'My Account',
            path: '/account'
        },
        { 
            text: 'Sign Out',
            path: '/'
        }
    ],
    notifications: [
        {
            text: 'Nissan Mexico SVFs are ready for review',
            path: '/sample',
            icon: 'mdi-exclamation'
        },
        {
            text: 'Nissan US Mailout has Launched',
            path: '/mailouts',
            icon: 'mdi-exclamation'
        },
    ],
    notificationsCount: "2",
    notificationsColor: "red",
    notificationsVisible: true

    }),

    methods: {
        resetNotifications: function() {
            this.notificationsCount= "0"
            this.notificationsVisible = false
        }
    }
  }
</script>