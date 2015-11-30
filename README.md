STORE LOCATOR README
==================

# Get a copy of latest code

```bash
git clone git@github.com:nvdarekar/store-locator.git
```

# Setup vitualenv

```bash
# Install latest release of PIP
curl https://bootstrap.pypa.io/get-pip.py | sudo python

# Install latest release of virtualenvwrapper
sudo pip install -U virtualenvwrapper

# Create a new virtualenv
mkvirtualenv store-locator

# Activate virtualenv, you'll need to do this every time before running any python code/shell.
workon store-locator
```

# Install Dependecies
```bash
# Install PIP requirements
pip install -r requirements.txt
# Install front-end dependencies using bower
bower install
```

# Install mysql database
```bash
sudo apt-get install mysql-server
sudo apt-get install libmysqlclient-dev
```

# Setup Database
```bash
#login to your mysql
mysql -u USERNAME -p PASSWORD
#populate using following command
mysql> \. create database store_locator.sql
```

#Make changes in app.py 
Change mysql database username password as you set while installing mysql


#Run application
```bash
#Run flask application by following command
$ python app.py
# Now access application from browser with following URL
http://127.0.0.1:5000 
```




