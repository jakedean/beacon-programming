{% include navigation.html %}

## Why do we need Git?
Git is a tool to manage the changes that happen to your files.  The reason we need it is that we need a way to know how
our codebase has changed over time.  Imagine we have a single file in our codebase called `app.js` and we push it to production.
Then, a week later we make a change to that file and it breaks our entire application.  We need a way to go back to the previous version
of the file to get back to a working state for our application.  If we did not have a change log that would be difficult to know what
that last version of the file was.  Git keeps track of that for us and tells us who made changes and when.  In this section we will
show a basic Git workflow, for more information you can head over to read the fantastic book [Pro Git](https://git-scm.com/book/en/v2).

### Installing
To install for your platform just go [here](https://git-scm.com/downloads).

### First Repo
A Git repository is a directory of code that keeps track of how it changes over time.  A repository can be a single application or could be a group
of applications that one team within an organization owns.  We can create our first repo by going to your github account and clicking `Create Repository`
giving it the name of `test`.  You should choose to create the repository with a `README.md` file (a file to tell other users what the point of your
project is).  At this point the repository has been created on Github but does not exist on your local machine, so we should create a directory that will
hold this repository (you could store it in `/code` if you wanted.), `cd` into this directory then find the url for the repo and clone it tour our local
computer with `git clone https://github.com/your-user-name/test`.  Once you do this you can `cd test` and type `ls` you will notice the `README.md` file in
your `test` directory on your computer.  You can also now type `git status` to find out what the status of your repo is.

## Branches
You can think of branches as a copy of the full repository that you can use to make changes to.  The need for branches is that we might be working on
two changes at the same time and each change will require a copy of the codebase.
Imagine we might be working on one issue related to the database so we will have branches `master` (mirror of the code in production) and `database-fix` (a mirror
of what is on master PLUS our database change we are tesing) when all of a sudden a user reports an issue on the site related to the formatting
of some text.  We want to be able to branch off of master (start with a copy of the code that is live in production) and create a branch
called `formatting-bug-fix` in order to perform the code change to fix our bug.  This would not work well if we could only have one copy of the
codebase on our local setup because we might have already made changes to our codebase related to the database fix.  With branches we can
have an isolated branch with JUST the database fix and an isolated branch with JUST the formatting bug fix and a master branch which JUST
has the version of the codebase that exists in production.  We can create new branches with the command `git checkout -b new-branch-name` and
the key idea is that the new branch that is created is a copy of the branch we were on when we ran the `checkout` command.  For example, if we are
on `master` and we run `git checkout -b new-branch` then `new-branch` will be identical to `master`.  Normally you will want to crated your branches
off of `master` because often times you want to start with a copy of the codebase that mirrors what is in production and add your change on top of that.

## Diffs
When we are making changes to a codebase it is a good idea to check the difference between your branch and the current state of production to see what
changes you are really about to make.  You might have added some debugging code for development purposes and you just want to scan that diff before
pushing to production to make sure you did not leave any development debugging code in your change.  You can diff two branches against each other like this
(assuming you are on a branch called `database-fix`) `git diff master`.  This will find the differences between the `master` branch and your `database-fix` branch
and show them to you.  You can also diff certain points in the commit history on a single branch to find the differences.  If we checkout `master`
we can find the difference between the current state and one commit in the past with `git diff HEAD~1 HEAD`.  `HEAD` always refers to the last
commit made to the branch, so this command is saying to find the difference between the most recent commit on the branch and the one before that.

## Commits
Commits should be single units of work.  At a company you would normally have one commit per issue that was worked on.  If you fixed a bug for a database query
you would have a single commit with all of the changes related to that fix in it.  The idea there is that it makes it easier to follow the evolution of the codebase
if the commits are well organized.  Also, if there is a problem with the code that you deploy and it needs to be reverted to a prior version you just have to revert
your single commit as opposed to finding many commits and reverting them all.  Commits will have a commit message that should be helpful in understanding
what the changes were.  An author will also be tied to the commit so you know who to contact should there be questions about the change.  Once you have added
commits to your git repo you can view them with `git log --stat` where the `--stat` log adds in a brief summary of the files that were changed and the number of
lines of code that were changed in each commit.

## A Git Workflow
If we want to make a change to `README.md` and push it back to the Github server we can do that with this work flow.
- We are currently on the `master` branch so let's make a copy of this code for us to alter in another branch with `git checkout -b new-branch`
- We are now on branch `new-branch` and we can verify this by typing command `git branch` and you will see a `*` beside `new-branch` indicating we have
  that branch checked out
- We are ready to make our change to `README.md`, so open the file in a text editor and add a line that says `Testing my first commit.`
- If we save this file and type `git status` we will see the file listed as an unstaged change
- We want to commit this change to our local branch but first we have to stage the commit (get it ready to be commited) with `git add README.md`
- Now we can make our first commit with `git commit -m 'My First Commit'`  The `-m` flag indicates what message will be tied to the commit
- We can check the commit log by looking at it with `git log --stat` and we will see a commit with our message made by us
- In order to get this to the server we need to get back on our local master, merge the change in and push the change.
- So get back on our local master with `git checkout master`
- Merge the work from `new-branch` to `master` with `git merge --squash new-branch`
- Make our commit again on master with the same message `git commit -m 'My First Commit'`
- We we take a final look at what changes will be pushed if we were to push this to the server with `git diff origin/master` (`origin/master` is  a special branch that tracks
  the code on the server, so diffing against this will diff against the live version of master at the last time we pulled)
- We are ok with our changes so we can push to master with `git push origin master`

The biggest idea here is that there is NOT one correct Git workflow, there are many ways to work in Git so just find the one that works best for you.
For more advanced Git functionality check out the [Pro Git](https://git-scm.com/book/en/v2) book with an emphasis on the first 3 chapters.