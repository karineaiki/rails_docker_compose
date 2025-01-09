# Exécuter le docker compose

- dans le dossier, lancer la commande docker-compose watch
- En lançant après la commande docker ps, nous nous attendons à avoir les 3 containers.


# Lancer les migrations 

- Dans un autre terminal, lancez la commande  docker-compose exec backend bash
- Ensuite, exécutez la migration avec la commande : bundle exec rails db:migrate
- Dans le dossier db/seeds.rb, il y a quelques données de démo. Dans le même terminal, lancer la commande bundle exec rails db:seed

# Vérification

- Vous pouvez dans postman vérifier la requête GET sur "http://localhost:3000/films"
- sur votre navigateur, allez sur la page localhost:80, la liste de films devrait s'afficher