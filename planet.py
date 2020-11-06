saniye = int(input('yaşınızı saniye cinsinden giriniz:'))

gezegen = {
    "Mercury" : 0.2428467,
    "Venus": 0.61519726,
    "Earth":1,
    "Mars":1.88088158,
    "Jupiter":  11.862615,
    "Saturn":29.447498,
    "Uranus":84.016846,
    "Neptune":  164.79132,
           
    }
yıl = saniye /  31577600

print(yıl)
print(type(yıl))

for i in gezegen :
    yas = yıl * gezegen.get(i) 
    print(i , 'de yaşamış olsaydınız' , round(yas, 2) , 'yasında olurdunuz.','\n')

    