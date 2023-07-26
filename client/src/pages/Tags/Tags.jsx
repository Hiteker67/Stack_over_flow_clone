import React from 'react'
import './Tags.css'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import TagsList from './TagsList'

const Tags = () => {
  const tagsList =[{
    id: 1,
    tagName: "javaScript",
    tagDesc: "For questions about programming in ECMAScript (JavaScript/JS) and its different dialects/implementations (except for ActionScript). Note that JavaScript is NOT Java. Include all tags that are relevant to your question: e.g., [node.js], [jQuery], [JSON], [ReactJS], [angular], [ember.js], [vue.js], [typescript], [svelte], etc."
  },{  
    id: 2,
    tagName: "python",
    tagDesc: "Python is a multi-paradigm, dynamically typed, multi-purpose programming language. It is designed to be quick to learn, understand, and use, and enforces a clean and uniform syntax. Please note that Python 2 is officially out of support as of 2020-01-01. For version-specific Python questions, add the [python-2.7] or [python-3.x] tag. When using a Python variant (e.g. Jython, PyPy) or library (e.g. Pandas, NumPy), please include it in the tags."
  },{
    id: 3,
    tagName: "java",
    tagDesc: "Java is a high-level object-oriented programming language. Use this tag when you're having problems using or understanding the language itself. This tag is frequently used alongside other tags for libraries and/or frameworks used by Java developers."
  },{
    id: 4,
    tagName: "c#",
    tagDesc: "c# is a high-level, statically typed, multi-paradigm programming language developed by Microsoft. C# code usually targets Microsoft's .NET family of tools and run-times, which include .NET, .NET Framework, .NET MAUI, and Xamarin among others. Use this tag for questions about code written in C# or about C#'s formal specification."
  },{
    id: 5,
    tagName: "ajax",
    tagDesc: "AJAX (Asynchronous JavaScript and XML) is a technique for creating interactive website user interfaces without the traditional web page refresh or reload. It uses asynchronous data exchange between client and server to update displayed information and respond to user interactions seamlessly. Include additional tags for programming languages, libraries, frameworks, web browsers, protocols and other environmental information."
  },{
    id: 6,
    tagName: "android",
    tagDesc: "Android is Google's mobile operating system, used for programming or developing digital devices (Smartphones, Tablets, Automobiles, TVs, Wear, Glass, IoT). For topics related to Android, use Android-specific tags such as android-intent, android-activity, android-adapter, etc. For questions other than development or programming but related to the Android framework, use this link: https://android.stackexchange.com."
  },{
    id: 7,
    tagName: "html",
    tagDesc: "HTML (HyperText Markup Language) is the markup language for creating web pages and other information to be displayed in a web browser. Questions regarding HTML should include a minimal reproducible example and some idea of what you're trying to achieve. This tag is rarely used alone and is often paired with [CSS] and [JavaScript]."
  },{
    id: 8,
    tagName: "jquery",
    tagDesc: "jQuery is a JavaScript library. Consider also adding the JavaScript tag. jQuery is a popular cross-browser JavaScript library that facilitates Document Object Model (DOM) traversal, event handling, animations and AJAX interactions by minimizing the discrepancies across browsers. A question tagged jQuery should be related to jQuery, so jQuery should be used by the code in question, and at least jQuery usage-related elements must be in the question."
  },{
    id: 9,
    tagName: "c++",
    tagDesc: "C++ is a general-purpose programming language. Initially, it was designed as an extension to C and has a similar syntax, but it is now a completely different language. Use this tag for questions about code (to be) compiled with a C++ compiler. Use a version-specific tag for questions related to a specific standard revision [C++11], [C++14], [C++17], [C++20], or [C++23], etc."
  },{
    id: 10,
    tagName: "css",
    tagDesc: "CSS (Cascading Style Sheets) is a representation style sheet language used for describing the look and formatting of HTML (HyperText Markup Language), XML (Extensible Markup Language) documents and SVG elements including (but not limited to) colors, layout, fonts, and animations. It also describes how elements should be rendered on screen, on paper, in speech, or on other media."
  },{
    id: 11,
    tagName: "json",
    tagDesc: "JSON (JavaScript Object Notation) is a serializable data interchange format that is a machine and human readable. Do not use this tag for native JavaScript objects or JavaScript object literals. Before you ask a question, validate your JSON using a JSON validator such as JSONLint (https://jsonlint.com)."
  },{
    id: 12,
    tagName: "sql",
    tagDesc: "Structured Query Language (SQL) is a language for querying databases. Questions should include code examples, table structure, sample data, and a tag for the DBMS implementation (e.g. MySQL, PostgreSQL, Oracle, MS SQL Server, IBM DB2, etc.) being used. If your question relates solely to a specific DBMS (uses specific extensions/features), use that DBMS's tag instead. Answers to questions tagged with SQL should use ISO/IEC standard SQL."
  },{
    id: 13,
    tagName: "mysql",
    tagDesc: "MySQL is a free, open-source Relational Database Management System (RDBMS) that uses Structured Query Language (SQL). DO NOT USE this tag for other DBs such as SQL Server, SQLite etc. Those are different DBs that all use their own dialects of SQL to manage the data. Always specify the exact version of the server in the question. Versions 5.x differ greatly in their capabilities from versions 8+."
  },{
    id: 14,
    tagName: "arrays",
    tagDesc: "An array is an ordered linear data structure consisting of a collection of elements (values, variables, or references), each identified by one or more indexes. When asking about specific variants of arrays, use these related tags instead: [vector], [arraylist], [matrix]. When using this tag, in a question that is specific to a programming language, tag the question with the programming language being used."
  },{
    id: 15,
    tagName: "nodejs",
    tagDesc: "Node.js is an event-based, non-blocking, asynchronous I/O runtime that uses Google's V8 JavaScript engine and libuv library. It is used for developing applications that make heavy use of the ability to run JavaScript both on the client as well as on the server side and therefore benefit from the re-usability of code and the lack of context switching."
  },{
    id: 16,
    tagName: "reactjs",
    tagDesc: "React is a JavaScript library for building user interfaces. It uses a declarative, component-based paradigm and aims to be efficient and flexible."
  }              
  ]
  return (
    <div className='home-container-1'>
        <LeftSidebar />
        <div className='home-container-2'>
            <h1 className='tags-h1'>Tags</h1>
            <p className='tags p'>A tag is a keyword or label that categorizes your question with other, similar questions.</p>
            <p className='tags-p'>Using the right tags makes it easier for others to find and answer your question.</p>
            <div className='tags-list-container'>
                {
                    tagsList.map((tag) => (
                        <TagsList tag={tag} key={tagsList.id}/>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Tags