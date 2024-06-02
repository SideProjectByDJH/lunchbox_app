# lunchbox_app

<img src="https://github.com/SideProjectByDJH/lunchbox_app/assets/37764639/816e6d3c-9731-4e1b-a759-cffc1084bfd0" width="200" height="400"/>

## 👨‍💻팀원 소개

[김동섭]()
[박정미](https://github.com/Jummi10)
[전효희](https://github.com/kwhyo)

## 🏗️설계

### 프로토타입

[🎨 잼보드 프로토타입](https://jamboard.google.com/d/1R6hRjgcnSGk37cs06kkSRE2t-6LVESY4FXQgfcxnDPI/viewer?pli=1&mtt=ljumhs3qn3q4&f=4) <br>

[🎨 피그마 프로토타입](https://www.figma.com/file/Qz8Q8yYEWiI1b0IEUzjCFC/Prototyping-in-Figma?type=design&node-id=0%3A1&mode=design&t=50v4bIGBevHdi8uZ-1) <br>

### ERD 설계

[☁️ ERD 클라우드 링크](https://www.erdcloud.com/d/LXAkBGT5X24Q7m65B)

### Local Server Connection

- 로컬 백엔드 서버에 API요청을 보내기 위해서는 .env파일을 생성하여 다음과 같이 작성해야 합니다.

```
EXPO_PUBLIC_API_URL=http://{백엔드서버 IPv4 주소:포트}
```

- 백엔드서버의 IPv4의 주소는 localhost, 127.0.0.1 과 같은 주소가 아닌 실제 IPv4 주소를 적어야 합니다.
- mac OS에서는 ifconfig 명령어를 통해 IPv4 주소를 확인할 수 있습니다.
  - 터미널에서 `$ ifconfig | grep inet` 실행 수 `inet 192.168.1.3 netmask 0xffffff00 broadcast` 같은 형식으로 나옵니다. -> 192.168.1.3:8080 와 같이 입력하면 됩니다.
- windows OS에서는 ipconfig 명령어를 통해 IPv4 주소를 확인할 수 있습니다. 
