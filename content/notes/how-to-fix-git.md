---
title: How to fix git
date: 2022-08-25
draft: false
tags:
  - Github
  - Coding
---


## Accidently made a commit to master/main branch


    git branch backup
    git reset HEAD^
    git stash
    git push origin master –force
    git stash pop