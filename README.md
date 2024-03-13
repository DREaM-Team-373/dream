
# Running the Code

Running the code for Project Dream is simple. Follow these steps in the terminal (Mac):

## Clone the DREaM repository:
```
git clone https://github.com/DREaM-Team-373/dream
```

## Generate the .jar file for trombone:
```
jar cvfm trombone-5.2.18.jar trombone-5.2.18/META-INF/MANIFEST.MF -C trombone-5.2.18 .
```

## Navigate back to the root directory of the repository:
```
cd ../../..
```

## Start the server, opening the page on your browser:
```
java -jar VoyantServer.jar
```
You can also start the server by opening `java -jar VoyantServer.jar` with JavaLauncher (“right-click” > Open With > JavaLauncher).

Finally, going to this URL allows the user to open the DREaM interface:
```
http://127.0.0.1:8888/dream/
```
