---
title: "Ngnix MySQL and PHP on High Sierra"
path: /articles/ngnix-mysql-php-on-highsierra
thumbnail: "./dev.png"
tags: ["macOS", "development", "php", "nginx"]
date: 2019-03-28
yearSlug: "2019"
description: >
  How I installed php web development enviroment on my Macbook Pro. 
---

Upon working up an idea to implement some added functionality to an existing website running on nginx. It was time to get busy and the first thing was to setup a development enviroment with the same stack.

## Package Manager Choice

I will admit I'm a longtime user of Macports and its already on my system so naturally thats my first choice. But I do know that packages from Mackports are sometimes a stable version if anything.

Searching Macports for mysql and just as I suspected, I find version v5.7. I need to work with the latest version on this one, which should be v8.x.x.

Luckily, a few months ago, I installed Homebrew while working on one of my previous projects.

Searching Homebrew, I find that mysql is at version 8.x.x. Ok so Homebrew it is. I have nothing against Homebrew its just that I learned macports first. Times change and I could be wrong but it was stated that both of these on one system warns that things can get wonky if your not careful. I chose one and stuck with it.

I use Homebrew only for packages or new versions of a package that I can't get on macports. That has always worked for me.

## Installation

- Nginx
- PHP
- MySQL

### Nginx

Install nginx


```bash
brew install nginx
```

Homebrew should output some useful information after installation completes.

```bash
mg1@mbproi5:[~]$ brew install nginx
==> Downloading https://homebrew.bintray.com/bottles/nginx-1.15.10.high_sierra.bottle.tar.gz
######################################################################## 100.0%
==> Pouring nginx-1.15.10.high_sierra.bottle.tar.gz
==> Caveats
Docroot is: /usr/local/var/www

The default port has been set in /usr/local/etc/nginx/nginx.conf to 8080 so that
nginx can run without sudo.

nginx will load all files in /usr/local/etc/nginx/servers/.

To have launchd start nginx now and restart at login:
  brew services start nginx
Or, if you don\'t want/need a background service you can just run:
  nginx
==> Summary
🍺  /usr/local/Cellar/nginx/1.15.10: 25 files, 2MB
mg1@mbproi5:[~]$
```

Install Homebrew services

```bash
brew tap homebrew/services
```

start Nginx
```bash
brew services start nginx
```

Now that nginx is installed and running lets open up the browser and point it to localhost:8080. 

Welcome to nginx!


### PHP

Install PHP
```bash
brew install php
```

If you look below, those are 40 extra packages pulled in as dependencies.
```bash
==> Installing dependencies for php: apr, apr-util, argon2, aspell, autoconf
brotli, c-ares, libidn, libmetalink, libssh2, jansson, jemalloc, libev,
libevent, nghttp2, openldap, rtmpdump, curl-openssl, libtool, unixodbc, freetds
libpng, freetype, gettext, libffi, pcre, gdbm, readline, sqlite, xz, python,
glib, gmp, icu4c, jpeg, libpq, libsodium, libzip, tidy-html5 and webp
```

Create a scripts/ folder inside of document root ( /usr/local/var/www ).
```bash
mkdir -p /usr/local/var/www/scripts
```

create info.php inside of scripts folder
```bash
nano /usr/local/var/www/scripts/info.php
``` 
and insert this simple snippet to test if nginx is loading php files correctly.

<div class="filename">/usr/local/var/www/scripts/info.php</div>

```php
<?php infophp(); ?>
```



Now we need to enable php within the nginx.conf file. At appoximatly line 63, enable the PHP FastCGI location block. Also prepend $document\_root to fastcgi\_param like below.
<div class="filename">/usr/local/etc/nginx.conf</div>

```bash
    # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
        #
        location ~ \.php$ {
            root           html;
            fastcgi_pass   127.0.0.1:9000;
            fastcgi_index  index.php;
            fastcgi_param  SCRIPT_FILENAME  $document_root/scripts$fastcgi_script_name;
            include        fastcgi_params;
        }
```

### MySQL

Install mysql 
```
brew install mysql
```

```bash
==> Caveats
#We've installed your MySQL database without a root password. To secure it run:
 #   mysql_secure_installation

#MySQL is configured to only allow connections from localhost by default

#To connect run:
    mysql -uroot

#To have launchd start mysql now and restart at login:
  brew services start mysql
#Or, if you don't want/need a background service you can just run:
  mysql.server start
```

Start mysql launch daemon
```bash
brew services start mysql
```

Configure mysql
```bash
mysql_secure_installation
```


Login mysql
```bash
mysql -uroot -p
```

At this point the enviroment is setup and ready for development.😎