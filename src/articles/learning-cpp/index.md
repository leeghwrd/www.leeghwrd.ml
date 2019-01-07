---
title: "Continuing My C++ Journey."
path: /articles/learning-cpp
thumbnail: "./cpp-logo.png"
tags: ["oop", ,"development", "cpp"]
date: 2019-01-06
yearSlug: "2019"
description: >
  Overview of my history and journey of learning C++. 
---

Having been a self taught learner for sometime now, I've learned hands on with web and iOS development. Realizing how important c++ is: compilers, frameworks and libraries. Realtime data, vr, machine learning, and AAA game development... Yeah C++ is here to stay, Well atleast for this lifetime. Going back, and diving deeper into C++ just feels natural now and will be a plus plus.

## Learn C++ Now

Here is some sample code of whats on my radar. I wont mettle in misc code for long. Just need to build a few useful inhouse tools for my personal development productivity.

```cpp

#include <string>
#include <algorithm>
#include <iostream>
#include <vector>
#include <functional>
 
template <typename Container>
bool in_quote(const Container& cont, const std::string& s)
{
    return std::search(cont.begin(), cont.end(), s.begin(), s.end()) != cont.end();
}
 
int main()
{
    std::string str = "why waste time learning, when ignorance is instantaneous?";
    // str.find() can be used as well
    std::cout << std::boolalpha << in_quote(str, "learning") << '\n'
                                << in_quote(str, "lemming")  << '\n';
 
    std::vector<char> vec(str.begin(), str.end());
    std::cout << std::boolalpha << in_quote(vec, "learning") << '\n'
                                << in_quote(vec, "lemming")  << '\n';
 
    // The C++17 overload demo:
    std::string in = "Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
                     " sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";
    std::string needle = "pisci";
    auto it = std::search(in.begin(), in.end(),
                   std::boyer_moore_searcher(
                      needle.begin(), needle.end()));
    if(it != in.end())
        std::cout << "The string " << needle << " found at offset "
                  << it - in.begin() << '\n';
    else
        std::cout << "The string " << needle << " not found\n";
}
```

## C++ Overload

Overload demo.


