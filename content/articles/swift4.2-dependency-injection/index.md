---
title: "Swift 4 Dependency Injection"
path: /articles/swift4.2-dependency-injection
thumbnail: "./injection.png"
tags: ["swift", "iOS", "data"]
date: 2019-03-03
yearSlug: "2019"
description: >
  Passing data around within an iOS app. There are many ways!
---

Data needs to be passed around in your app. Regardless of what approach you
take there will be pros and cons.

I chose to use a DataService.swift file to centralize all relevant code. The
outcome is below:

<div class="filename">AppDelegate.swift</div>

```swift
let dataService = DataService.shared
    let mainTabBarController = MainTabBarController(dataService: dataService)
    
    mainTabBarController.tabBar.tintColor = #colorLiteral(red: 0.2383010787, green: 0.2383010787, blue: 0.2383010787, alpha: 1)
    mainTabBarController.selectedIndex = 1

    window = UIWindow(frame: UIScreen.main.bounds)
    window?.rootViewController = mainTabBarController
    window?.makeKeyAndVisible()
```

I intialized the rootviewController in the AppDelegate as a TabBarController,
after deleting the storyboard and references to it.

<div class="filename">Controller/MainTabBarController.swift</div>

```swift
var dataService: DataService
  
  init(dataService: DataService) {
    self.dataService = dataService
    super.init(nibName: nil, bundle: nil)    
  }
  
  required init?(coder aDecoder: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  }
```

First intialized dataService in MainTabBarController.swift

<div class="filename">Controller/MainTabBarController.swift</div>

```swift
extension UITabBarController {
  func createNavController(viewController: UIViewController, glyph: UIImage, title: String) -> UINavigationController {
    
    let vc = viewController
    let nav = UINavigationController(rootViewController: vc)
    nav.tabBarItem.image = glyph
    nav.title = title
    
    return nav
  }
}
```

Above is the extension that creates the view controllers.

<div class="filename">Controller/MainTabBarController.swift</div>

```swift
func setupTabBar() {

    let videoVC = createNavController(
      viewController: VideoVC(dataService: dataService),
      glyph: #imageLiteral(resourceName: "video"),
      title: "Videos")
    
    let imageVC = createNavController(
      viewController: ImageVC(dataService: dataService),
      glyph: #imageLiteral(resourceName: "Image"),
      title: "Images")
    
    let searchVC = createNavController(
      viewController: SearchVC(dataService: dataService),
      glyph: #imageLiteral(resourceName: "search"),
      title: "Search")
    
    viewControllers = [videoVC, imageVC, searchVC]
    
    guard let items = tabBar.items else { return }
    
    for item in items {
      item.imageInsets = UIEdgeInsets(top: 4, left: 0, bottom: -4, right: 0)
    }
  }
```

This function uses an extension to init tab view controllers.
