**Step 1:** Create Your Flask Application
First, create a file named app.py with the following content:

Python ```app.py```

```
from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, Docker!'

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
```

**Step 2:** Requirements
Create a file named requirements.txt in the same directory as your app.py with the following content:

makefile
```
flask==2.0.1
```

**Step 3:** Create a Dockerfile
Next, create a Dockerfile in the same directory with the following content:

Dockerfile
```
# Use an official Python runtime as a parent image
FROM python:3.8-slim

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the current directory contents into the container at the working directory
COPY . .

# Install any needed packages specified in requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Make port 5000 available to the world outside this container
EXPOSE 5000

# Define environment variable
ENV NAME World

# Run app.py when the container launches
CMD ["python", "app.py"]
```
Step 4: Build Your Docker Image
Open a terminal and navigate to the directory containing your Dockerfile, then build your Docker image:


```docker build -t python-flask-sample .```

**Step 5:** Run Your Docker Container
After the build completes, run your Docker container:

```docker run -p 5000:5000 python-flask-sample```

**Step 6:** Verify
Open a web browser and go to ```http://localhost:5000```. You should see Hello, Docker! displayed.


