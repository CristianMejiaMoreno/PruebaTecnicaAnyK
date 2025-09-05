## Preguntas de SQL 
PD: **Delio** me paso las respuestas :p


## 1. Normalizacion
Ayuda a eliminar redundancias y dependencias innecesarias en las bases de datos, asegurando consistencia e integridad dentro la base de datos y su informacion.  
- **1NF:** Cada celda tiene un unico valor. Ej: dividir `telefonos = "111,222"` en una tabla aparte de telefonos.  
- **2NF:** Todos los atributos dependen completamente de la clave primaria, ej: separar `direccion_cliente` de una tabla de pedidos.  
- **3NF:** Eliminar dependencias transitivas, ej: si en `clientes` guardo `id_ciudad` y `nombre_ciudad`, debo extraer `ciudad` a otra tabla.  

---

## 2. JOIN para listar clientes con cantidad de pedidos
```sql
SELECT 
  c.name AS customer_name,
  c.email,
  COUNT(o.id) AS order_count
FROM customers c
LEFT JOIN orders o 
  ON c.id = o.customer_id
GROUP BY c.id, c.name, c.email;
```

Use **LEFT JOIN** para incluir tambien a los clientes que no tienen pedidos.

## 3.Top 3 productos mas caros

```sql
SELECT id, name, price
FROM products
ORDER BY price DESC
LIMIT 3;

```
## 4. Prevencion de SQL Injection en Node.js
Se previene con consultas parametrizadas en caso de no tener un ORM, ya que en su mayoria previenen estos ataques en el proyecto, ej:

```javascript
// No Parametrizado: vulnerable a inyección SQL
const user = 'admin'; 
const query = `SELECT * FROM users WHERE username = '${user}'`;

// Parametrizado: seguro con consultas parametrizadas
const user = 'admin'; 
const safeQuery = 'SELECT * FROM users WHERE username = ?';
connection.execute(safeQuery, [user]); // Los datos se envian por separado
```

Tambien se hace con validacion de las request

```javascript
// Validacion
const userId = parseInt(request.body.userId);
if (isNaN(userId)) {
  return response.status(400).send("ID de usuario inválido.");
}

// Escape
const escapedName = connection.escape(request.body.name);
```


