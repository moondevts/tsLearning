# BRIEF
Build your first plugin

# REFERENCES

## Youtube
> [(Youtube) 재생목록](https://www.youtube.com/watch?v=-JAphRkjV9g&list=PLXDU_eVOJTx5YBAszyuOTyxlgIxkQVyii&index=2)

- [1 a new series from Figma](https://www.youtube.com/watch?v=-JAphRkjV9g&list=PLXDU_eVOJTx5YBAszyuOTyxlgIxkQVyii&index=1)
- [2 Build your first plugin: 1. Overview](https://www.youtube.com/watch?v=4G9RHt2OyuY&list=PLXDU_eVOJTx5YBAszyuOTyxlgIxkQVyii&index=2)
- [3 Build your first plugin: 2. Introduction to Plugins & API](https://www.youtube.com/watch?v=wMpa8GoM0lk&list=PLXDU_eVOJTx5YBAszyuOTyxlgIxkQVyii&index=3)
- [4 Build your first plugin: 3. Plugin Environment Setup](https://www.youtube.com/watch?v=p-z566ILvxc&list=PLXDU_eVOJTx5YBAszyuOTyxlgIxkQVyii&index=4)
- [5 Build your first plugin: 4. Building Your Plugin](https://www.youtube.com/watch?v=ExwP3Kmh-vI&list=PLXDU_eVOJTx5YBAszyuOTyxlgIxkQVyii&index=5)
- [6 Build your first plugin: 5. Publishing to the Community](https://www.youtube.com/watch?v=ZpJ_z1WNRgA&list=PLXDU_eVOJTx5YBAszyuOTyxlgIxkQVyii&index=6)


- ## Written Guides
- [BYFP 1: Overview](https://help.figma.com/hc/en-us/articles/4407260620823--BYFP-1-Overview)
- [BYFP 2: Introduction to Plugins & API](https://help.figma.com/hc/en-us/articles/4407275338775--BYFP-2-Introduction-to-Plugins-API)
- [BYFP 3: Plugin Environment Setup](https://help.figma.com/hc/en-us/articles/4407531166743--BYFP-3-Plugin-Environment-Setup)
- [BYFP 4: Building Your Plugin](https://help.figma.com/hc/en-us/articles/4407531247639--BYFP-4-Building-Your-Plugin)
- [BYFP 5: Publishing to the Community](https://help.figma.com/hc/en-us/articles/4407531267607--BYFP-5-Publishing-to-the-Community)

## Featurings
- [Figma for Beginners](https://www.figma.com/community/file/915647337333327091)
- [Figma Plugin DS](https://github.com/thomas-lowry/figma-plugin-ds)

- [API Reference](https://www.figma.com/plugin-docs/api/api-reference/)



# LECTURES
## [1 a new series from Figma](https://www.youtube.com/watch?v=-JAphRkjV9g&list=PLXDU_eVOJTx5YBAszyuOTyxlgIxkQVyii&index=1)


## [2 Build your first plugin: 1. Overview](https://www.youtube.com/watch?v=4G9RHt2OyuY&list=PLXDU_eVOJTx5YBAszyuOTyxlgIxkQVyii&index=2)


## [3 Build your first plugin: 2. Introduction to Plugins & API](https://www.youtube.com/watch?v=wMpa8GoM0lk&list=PLXDU_eVOJTx5YBAszyuOTyxlgIxkQVyii&index=3)


## [4 Build your first plugin: 3. Plugin Environment Setup](https://www.youtube.com/watch?v=p-z566ILvxc&list=PLXDU_eVOJTx5YBAszyuOTyxlgIxkQVyii&index=4)

> typescript 사용

```shell
inTS> npm install -g typescript
```

> Create plugin

`Menu > Plugins > Development > New Plugin`
  - 'Figma design' 선택후 'Next' 클릭
  - Plugin 이름 'my-first-plugin' 입력
  - 'with UI & browser APIs' 템플릿 선택
  - Save as 'C:\MoonDev\withLang\inTS\tsLearning\build-your-first-plugin' 지정

> npm install

```shell
my-first-plugin> npm install --save-dev @figma/plugin-typings
```

> Build 설정
`ctrl + shift + B` 클릭
  - tsc: watch(감시) - tsconfig.json 선택

> 테스트
- `Menu > Plugins > Development > my-first-plugin` 클릭
- `Create` 클릭


## [5 Build your first plugin: 4. Building Your Plugin](https://www.youtube.com/watch?v=ExwP3Kmh-vI&list=PLXDU_eVOJTx5YBAszyuOTyxlgIxkQVyii&index=5)

- [BYFP 4: Building Your Plugin](https://help.figma.com/hc/en-us/articles/4407531247639--BYFP-4-Building-Your-Plugin)
- [Figma for Beginners](https://www.figma.com/community/file/915647337333327091)
- [Figma Plugin DS](https://github.com/thomas-lowry/figma-plugin-ds)


### Copy the design file
[Figma for Beginners](https://www.figma.com/community/file/915647337333327091)


### Functional requirements
- Open a modal in order to display our user interface.
- Send form information to our plugin logic once the user clicks Submit.
- Find the appropriate component set and its variants from our Figma for Beginners file.
- Check which variant of the card component the user has selected based on the form.
- Load the same fonts used in the existing card components.
- Use a method from the Figma API to create a new Post component. 
- Overwrite text and use other tools like the Math.random function to change the content in a Post component.
- Add the new Post component to the Figma file.
- Tell Figma to zoom in to the newly created Post.


### Requirements:

[ ] A modal with a form
[ ] A form heading
[ ] Input field and label for Username
[ ] Input field and label for Name
[ ] Text area and label for Description
[ ] Dark mode switch
[ ] Radio button for number of images
[ ] Submit button


### Logic:
- Use Figma API to have plugin open a modal for the user interface
- Once the user clicks submit, we send the form information to plugin logic
- Find the appropriate component set and its variants
- Check which variant the user has selected
- Load the appropriate fonts
- Create a new instance of variant with information from plugin form
- Add new component to Figma file
- Tell Figma to zoom into new post.

### Build UI

[Figma Plugin DS](https://github.com/thomas-lowry/figma-plugin-ds)
```
<script src="https://cdn.jsdelivr.net/gh/thomas-lowry/figma-plugin-ds/dist/iife/figma-plugin-ds.js"></script>
```


## [6 Build your first plugin: 5. Publishing to the Community](https://www.youtube.com/watch?v=ZpJ_z1WNRgA&list=PLXDU_eVOJTx5YBAszyuOTyxlgIxkQVyii&index=6)

- [BYFP 5: Publishing to the Community](https://help.figma.com/hc/en-us/articles/4407531267607--BYFP-5-Publishing-to-the-Community)


