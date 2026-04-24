from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from webdriver_manager.chrome import ChromeDriverManager
import time

# Ce script simule un vote automatisé à des fins pédagogiques (cybersécurité)
# Il ouvre un navigateur Chrome, accède à une page, clique sur un bouton et se ferme

# Configuration et lancement automatique de ChromeDriver avec WebDriver Manager
options = webdriver.ChromeOptions()
options.add_argument('--start-maximized')  # Ouvre la fenêtre en plein écran (optionnel)

driver = webdriver.Chrome(
    service=Service(ChromeDriverManager().install()),
    options=options
)

# URL cible (à adapter pour un site de test légitime)
driver.get("https://exemple.com/vote")  # Remplacer par l'URL réelle de test

# Pause pour s'assurer que la page est bien chargée (optionnel)
time.sleep(2)

try:
    # Recherche du bouton de vote par son ID (modifier si besoin)
    vote_button = driver.find_element(By.ID, "vote-btn")  # Ou By.NAME / By.CLASS_NAME / By.XPATH selon la page
    vote_button.click()  # Simule le clic de vote
    print("✅ Vote simulé avec succès.")

except Exception as e:
    # Gestion d’erreur si le bouton n’est pas trouvé ou un autre problème survient
    print("❌ Erreur lors de l’exécution du vote :", e)

# Attend 2 secondes pour visualiser l'action (peut être supprimé)
time.sleep(2)

# Ferme proprement le navigateur
driver.quit()

# Pour protéger une page contre ce genre de script, on peut :
# - Ajouter un CAPTCHA
# - Imposer un jeton CSRF unique
# - Suivre les sessions utilisateur et limiter les IP
# - Ajouter un délai minimal entre deux votes
