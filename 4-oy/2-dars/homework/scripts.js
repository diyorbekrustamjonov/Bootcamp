/* 
    1. initialize a new repository. Add two text files in your working directory
        git init
        type null> dars1.txt
        type null> dars2.txt

    2. View the status fo the working directory and the staging area
        git status

    3. Stage both files
        git add .

    4. View the changes in the staging area
        git diff --staged

    5. Create a commit
        git commit -m "Darslar"

    6. View the list of commits
        git log

    7. View the content of the last commit
        git show HEAD

    8. Update one of the files. View the changes in the working directory
        type null> dars3.txt
        git diff

    9. Stage the changes
        git add dars3.txt

    10. Unstage the file
        git restore dars3.txt
*/