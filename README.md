01
Requerimientos -
Historias de Usuario para la SPA de Películas consumiendo la API de TMDB -
https://developer.themoviedb.org/docs/getting-started




HECHO
Visualización de Películas Populares 
Como usuario de la aplicación,
Quiero ver una grilla de películas populares en la página principal,
Para poder descubrir nuevas películas para ver.
Criterios de Aceptación:
- La página principal debe mostrar una grilla de películas populares.
- Cada película debe mostrarse como una tarjeta con su póster y título.
- La grilla debe ser responsive y ajustarse a diferentes tamaños de pantalla.

02
Historia de Usuario 2: Paginación de Películas

Como usuario de la aplicación,
Quiero poder navegar a través de múltiples páginas de películas,
Para ver más allá de las películas inicialmente mostradas.
Criterios de Aceptación:
- Debe haber controles de paginación debajo de la grilla de películas.
- Los controles deben incluir botones "Anterior" y "Siguiente".
- Debe mostrarse el número de página actual y el total de páginas.
- Los botones deben deshabilitarse apropiadamente (ej. "Anterior" en la primera
página).


HECHO
03
Búsqueda de Películas
## Historia de Usuario 3: Búsqueda de Películas
Como usuario de la aplicación,
Quiero poder buscar películas por título,
Para encontrar rápidamente películas específicas de mi interés.
Criterios de Aceptación:
- Debe haber una barra de búsqueda en la parte superior de la página.
- La búsqueda debe iniciarse al presionar Enter o al hacer clic en un botón de
búsqueda.
- Los resultados de la búsqueda deben reemplazar la grilla de películas populares.
- La paginación debe funcionar correctamente con los resultados de búsqueda.

04
Visualización de Detalles de Película
## Historia de Usuario 4: Visualización de Detalles de Película
Como usuario de la aplicación,
Quiero poder hacer clic en una película para ver sus detalles,
Para obtener más información sobre la película antes de decidir verla.
Criterios de Aceptación:
- Al hacer clic en una película, debe dirigirse a una página de detalles.
- La página de detalles debe mostrar el título, póster, sinopsis, fecha de lanzamiento y
calificación de la película.
- Debe haber un enlace para ver los trailers de la película.
05
Visualización de Trailers
## Historia de Usuario 6: Visualización de Trailers
Como usuario de la aplicación,
Quiero poder ver los trailers disponibles para una película,
Para decidir si la película me interesa lo suficiente para verla.
Criterios de Aceptación:
- Debe haber una sección o página separada para ver los trailers de una película.
- Los trailers deben reproducirse directamente en la página usando iframes de
YouTube.
